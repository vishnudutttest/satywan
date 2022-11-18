<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Http\Controllers\BorrowerController;
use App\Models\User;
use Faker\Generator;
use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;

class BorrowerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_CreateBorrower()
    {
        $user = User::find(7);
        $this->be($user);

        $borrower = [
            'name1' => 'Vishnu',
            'email' => 'email@yahoo.com',
            'phone'=> '8989989898',
            'address'=> '#adsfasdf',
            'AmountGiven'=> '4000',
            'no_of_installment'=> '30',
            'intallmentType'=> '1',
            'installmentAmount'=> '200',
            'installmentStartDate'=> '2022-10-26',
        ];
        $response = $this->actingAs($user)->post('/addnew-brrower',$borrower);
        $response->assertEqual(1);
    }
}
