<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
class BorrowlistFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
       
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->e164PhoneNumber(),
            'address'=>$this->faker->address(),
            'AmountGiven' => 3000,
            'no_of_installment' => 30,
            'intallmentType' => 'daily',
            'installmentAmount'=> 200,
            'installmentStartDate'=>date('2022-07-07'),
            'userId'=> User::all()->random()->id
        ];
        
    }
}
