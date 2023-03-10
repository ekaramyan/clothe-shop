<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\ProductController
 */
class ProductControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    /**
     * @test
     */
    public function index_behaves_as_expected()
    {
        $products = Product::factory()->count(3)->create();

        $response = $this->get(route('product.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function store_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\ProductController::class,
            'store',
            \App\Http\Requests\ProductStoreRequest::class
        );
    }

    /**
     * @test
     */
    public function store_saves()
    {
        $title = $this->faker->sentence(4);
        $description = $this->faker->text;
        $price = $this->faker->randomFloat(/** double_attributes **/);
        $image = $this->faker->word;
        $category_id = $this->faker->numberBetween(-100000, 100000);

        $response = $this->post(route('product.store'), [
            'title' => $title,
            'description' => $description,
            'price' => $price,
            'image' => $image,
            'category_id' => $category_id,
        ]);

        $products = Product::query()
            ->where('title', $title)
            ->where('description', $description)
            ->where('price', $price)
            ->where('image', $image)
            ->where('category_id', $category_id)
            ->get();
        $this->assertCount(1, $products);
        $product = $products->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function show_behaves_as_expected()
    {
        $product = Product::factory()->create();

        $response = $this->get(route('product.show', $product));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function update_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\ProductController::class,
            'update',
            \App\Http\Requests\ProductUpdateRequest::class
        );
    }

    /**
     * @test
     */
    public function update_behaves_as_expected()
    {
        $product = Product::factory()->create();
        $title = $this->faker->sentence(4);
        $description = $this->faker->text;
        $price = $this->faker->randomFloat(/** double_attributes **/);
        $image = $this->faker->word;
        $category_id = $this->faker->numberBetween(-100000, 100000);

        $response = $this->put(route('product.update', $product), [
            'title' => $title,
            'description' => $description,
            'price' => $price,
            'image' => $image,
            'category_id' => $category_id,
        ]);

        $product->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($title, $product->title);
        $this->assertEquals($description, $product->description);
        $this->assertEquals($price, $product->price);
        $this->assertEquals($image, $product->image);
        $this->assertEquals($category_id, $product->category_id);
    }


    /**
     * @test
     */
    public function destroy_deletes_and_responds_with()
    {
        $product = Product::factory()->create();

        $response = $this->delete(route('product.destroy', $product));

        $response->assertNoContent();

        $this->assertModelMissing($product);
    }
}
