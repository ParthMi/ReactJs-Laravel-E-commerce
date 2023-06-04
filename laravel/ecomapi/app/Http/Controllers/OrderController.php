<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use App\Models\Products;
class OrderController extends Controller
{
    public function makeorder(Request $request){
		$order=new Orders;
		$order->uid=$request['uid'];
		$order->name=$request['name'];
		$order->email=$request['email'];
		$order->address=$request['address'];
		$order->mobile=$request['mobile'];
		$order->payment=$request['payment'];
		$order->pid=$request['pid'];
		if($order->save()){
			$response = [
                'message' =>  'Order successful',
                'status' => 1,
            ];
		}
		else{
			$response = [
                'message' =>  'Order failed',
                'status' => 0,
            ];
		}
		return response()->json($response);	
	}
	public function myorders($id){
		$order = Orders::join('products', 'products.pid', '=', 'orders.pid')
            ->where('orders.uid', $id)
            ->get(['orders.*', 'products.*']);
			
		//$order=Orders::where('uid','=',$id)->get();
		
		if($order){
			$response = [
                'message' =>  'Order fetch successful',
                'status' => 1,
				'data' => $order
            ];
		}
		else{
			$response = [
                'message' =>  'Orders not found',
                'status' => 0,
            ];
		}
		return response()->json($response);	
	}
}
