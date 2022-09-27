<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
class BrowerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->e164PhoneNumber(),
            'address'=>fake()->address(),
            'AmountGiven' => 3000,
            'no_of_installment' => 30,
            'intallmentType' => 'daily',
            'installmentAmount'=> 200,
            'userId'=> User::all()->random()->id,
        ];
    }
}
