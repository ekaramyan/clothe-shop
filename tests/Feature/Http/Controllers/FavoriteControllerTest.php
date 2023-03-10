<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\FavoriteController
 */
class FavoriteControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    /**
     * @test
     */
    public function index_behaves_as_expected()
    {
        $favorites = Favorite::factory()->count(3)->create();

        $response = $this->get(route('favorite.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function store_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\FavoriteController::class,
            'store',
            \App\Http\Requests\FavoriteStoreRequest::class
        );
    }

    /**
     * @test
     */
    public function store_saves()
    {
        $user_id = $this->faker->numberBetween(-100000, 100000);
        $product_id = $this->faker->numberBetween(-100000, 100000);

        $response = $this->post(route('favorite.store'), [
            'user_id' => $user_id,
            'product_id' => $product_id,
        ]);

        $favorites = Favorite::query()
            ->where('user_id', $user_id)
            ->where('product_id', $product_id)
            ->get();
        $this->assertCount(1, $favorites);
        $favorite = $favorites->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function show_behaves_as_expected()
    {
        $favorite = Favorite::factory()->create();

        $response = $this->get(route('favorite.show', $favorite));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function update_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\FavoriteController::class,
            'update',
            \App\Http\Requests\FavoriteUpdateRequest::class
        );
    }

    /**
     * @test
     */
    public function update_behaves_as_expected()
    {
        $favorite = Favorite::factory()->create();
        $user_id = $this->faker->numberBetween(-100000, 100000);
        $product_id = $this->faker->numberBetween(-100000, 100000);

        $response = $this->put(route('favorite.update', $favorite), [
            'user_id' => $user_id,
            'product_id' => $product_id,
        ]);

        $favorite->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($user_id, $favorite->user_id);
        $this->assertEquals($product_id, $favorite->product_id);
    }


    /**
     * @test
     */
    public function destroy_deletes_and_responds_with()
    {
        $favorite = Favorite::factory()->create();

        $response = $this->delete(route('favorite.destroy', $favorite));

        $response->assertNoContent();

        $this->assertModelMissing($favorite);
    }
}
