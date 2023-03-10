<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Basket;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\BasketController
 */
class BasketControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    /**
     * @test
     */
    public function index_behaves_as_expected()
    {
        $baskets = Basket::factory()->count(3)->create();

        $response = $this->get(route('basket.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function store_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\BasketController::class,
            'store',
            \App\Http\Requests\BasketStoreRequest::class
        );
    }

    /**
     * @test
     */
    public function store_saves()
    {
        $user_id = $this->faker->numberBetween(-100000, 100000);
        $product_id = $this->faker->numberBetween(-100000, 100000);

        $response = $this->post(route('basket.store'), [
            'user_id' => $user_id,
            'product_id' => $product_id,
        ]);

        $baskets = Basket::query()
            ->where('user_id', $user_id)
            ->where('product_id', $product_id)
            ->get();
        $this->assertCount(1, $baskets);
        $basket = $baskets->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function show_behaves_as_expected()
    {
        $basket = Basket::factory()->create();

        $response = $this->get(route('basket.show', $basket));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function update_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\BasketController::class,
            'update',
            \App\Http\Requests\BasketUpdateRequest::class
        );
    }

    /**
     * @test
     */
    public function update_behaves_as_expected()
    {
        $basket = Basket::factory()->create();
        $user_id = $this->faker->numberBetween(-100000, 100000);
        $product_id = $this->faker->numberBetween(-100000, 100000);

        $response = $this->put(route('basket.update', $basket), [
            'user_id' => $user_id,
            'product_id' => $product_id,
        ]);

        $basket->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($user_id, $basket->user_id);
        $this->assertEquals($product_id, $basket->product_id);
    }


    /**
     * @test
     */
    public function destroy_deletes_and_responds_with()
    {
        $basket = Basket::factory()->create();

        $response = $this->delete(route('basket.destroy', $basket));

        $response->assertNoContent();

        $this->assertModelMissing($basket);
    }
}
