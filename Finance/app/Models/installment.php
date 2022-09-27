<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Borrowlist;
class installment extends Model
{
    use HasFactory;

    protected $table = "installment";

    public function borrower()
    {
       return $this->hasOne(Borrowlist::class,'id', 'borrowId');
    }
}
