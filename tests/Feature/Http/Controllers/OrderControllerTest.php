<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Order;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\OrderController
 */
class OrderControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    /**
     * @test
     */
    public function index_behaves_as_expected()
    {
        $orders = Order::factory()->count(3)->create();

        $response = $this->get(route('order.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function store_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\OrderController::class,
            'store',
            \App\Http\Requests\OrderStoreRequest::class
        );
    }

    /**
     * @test
     */
    public function store_saves()
    {
        $product_id = $this->faker->numberBetween(-100000, 100000);
        $user_id = $this->faker->numberBetween(-100000, 100000);
        $amount = $this->faker->numberBetween(-10000, 10000);

        $response = $this->post(route('order.store'), [
            'product_id' => $product_id,
            'user_id' => $user_id,
            'amount' => $amount,
        ]);

        $orders = Order::query()
            ->where('product_id', $product_id)
            ->where('user_id', $user_id)
            ->where('amount', $amount)
            ->get();
        $this->assertCount(1, $orders);
        $order = $orders->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function show_behaves_as_expected()
    {
        $order = Order::factory()->create();

        $response = $this->get(route('order.show', $order));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    /**
     * @test
     */
    public function update_uses_form_request_validation()
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\OrderController::class,
            'update',
            \App\Http\Requests\OrderUpdateRequest::class
        );
    }

    /**
     * @test
     */
    public function update_behaves_as_expected()
    {
        $order = Order::factory()->create();
        $product_id = $this->faker->numberBetween(-100000, 100000);
        $user_id = $this->faker->numberBetween(-100000, 100000);
        $amount = $this->faker->numberBetween(-10000, 10000);

        $response = $this->put(route('order.update', $order), [
            'product_id' => $product_id,
            'user_id' => $user_id,
            'amount' => $amount,
        ]);

        $order->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($product_id, $order->product_id);
        $this->assertEquals($user_id, $order->user_id);
        $this->assertEquals($amount, $order->amount);
    }


    /**
     * @test
     */
    public function destroy_deletes_and_responds_with()
    {
        $order = Order::factory()->create();

        $response = $this->delete(route('order.destroy', $order));

        $response->assertNoContent();

        $this->assertModelMissing($order);
    }
}
