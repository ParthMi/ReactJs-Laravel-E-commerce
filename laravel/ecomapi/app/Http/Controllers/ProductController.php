<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $product=Products::all();
        $response = $product;
    return response()->json($response);
    }
    
    public function add(Request $request)	
    {
        $product = new Products;
            $product->product_name = $request['product_name'];
            $product->product_price = $request['product_price'];
            $product->product_img = $request['product_img'];
            $product->product_description = $request['product_description'];
            

            if($product->save()){
                $response = [
                    'message' =>  'product uploaded successfully',
                    'status' => 1,
                ];
                
            }
            else{
                $response = [
                    'message' =>  'uploading fail',
                    'status' => 0,
                ];
            }
            
            return response()->json($response);
        }

       public function delete($id){
        $product=Products::find($id);
        if( $product!=null){
            if($product->delete()){
            $response = [
                'message' =>  'product deleted successfully',
                'status' => 1,
            ];
        }
        }
        else{
            $response = [
                'message' =>  'product not found',
                'status' => 0,
            ];
        }
        
        return response()->json($response);
       }





       public function product($id){
        $product=Products::find($id);
        if( $product!=null){
            $response = $product;
        }
        else{
            $response = [
                'message' =>  'product not found',
                'status' => 0,
            ];
        }
        
        return response()->json($response);
       }
    
}
