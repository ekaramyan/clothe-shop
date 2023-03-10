<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\CategoryController
 */
class CategoryControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    /**
     * @test
     */
    public function index_behaves_as_expected()
    {
        $categories = Category::factory()->count(3)->create();

        $response = $this->get(route('category.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function store_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\CategoryController::class,
            'store',
            \App\Http\Requests\CategoryStoreRequest::class
        );
    }

    /**
     * @test
     */
    public function store_saves()
    {
        $title = $this->faker->sentence(4);
        $description = $this->faker->text;
        $image = $this->faker->word;

        $response = $this->post(route('category.store'), [
            'title' => $title,
            'description' => $description,
            'image' => $image,
        ]);

        $categories = Category::query()
            ->where('title', $title)
            ->where('description', $description)
            ->where('image', $image)
            ->get();
        $this->assertCount(1, $categories);
        $category = $categories->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function show_behaves_as_expected()
    {
        $category = Category::factory()->create();

        $response = $this->get(route('category.show', $category));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function update_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\CategoryController::class,
            'update',
            \App\Http\Requests\CategoryUpdateRequest::class
        );
    }

    /**
     * @test
     */
    public function update_behaves_as_expected()
    {
        $category = Category::factory()->create();
        $title = $this->faker->sentence(4);
        $description = $this->faker->text;
        $image = $this->faker->word;

        $response = $this->put(route('category.update', $category), [
            'title' => $title,
            'description' => $description,
            'image' => $image,
        ]);

        $category->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($title, $category->title);
        $this->assertEquals($description, $category->description);
        $this->assertEquals($image, $category->image);
    }


    /**
     * @test
     */
    public function destroy_deletes_and_responds_with()
    {
        $category = Category::factory()->create();

        $response = $this->delete(route('category.destroy', $category));

        $response->assertNoContent();

        $this->assertModelMissing($category);
    }
}
