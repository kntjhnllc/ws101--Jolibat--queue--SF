import { useState } from 'react';

export default function Home() {
  const [nowPreparing, setNowPreparing] = useState([]);
  const [nowServing, setNowServing] = useState([]);

  const addOrder = (event) => {
    event.preventDefault();
    const orderNumber = event.target.orderNumber.value;
    setNowPreparing([...nowPreparing, orderNumber]);
    event.target.reset();
  };

  const transferToNowServing = (orderNumber) => {
    setNowServing([...nowServing, orderNumber]);
    setNowPreparing(nowPreparing.filter((order) => order !== orderNumber));
  };

  const deleteOrder = (orderNumber) => {
    setNowServing(nowServing.filter((order) => order !== orderNumber));
  };


  return (
    <div className='content-center flex justify-center'>   
        <div className='p-4'>
        <form onSubmit={addOrder}>
            <label htmlFor='orderNumber' className='mr-2'>
              Order Number:
            </label>
            <input type='text' name='orderNumber' className='p-2 rounded-md border-gray-300 border' required/>
            <button type='submit' className='bg-blue-500 text-white px-2 py-1 ml-4 rounded'>
              Add Order
            </button>
          </form>
          <br></br>
        <div className='flex justify-between'>
        <div>
          <h1 className='text-3xl text-white font-bold  ps-5 pe-5 bg-green-500'>Now Serving</h1>
            <ul className='bg-gray-100 p-4 rounded-md '>
              {nowServing.map((orderNumber, index) => (
                <li key={index} className='flex text-green-500 items-center justify-between  font-bold text-3xl'>
                  <span>{orderNumber}</span>
                  <button className='text-green-500   ' onClick={() => deleteOrder(orderNumber)} >
                    x
                  </button>
                </li>
              ))}
            </ul>
        </div>
        <div>
          <h1 className='text-3xl text-white font-bold  ps-5 pe-5 bg-black'>Now Preparing</h1>
          <ul className='bg-gray-100 p-4 rounded-md'>
            {nowPreparing.map((orderNumber, index) => (
              <li key={index} className='flex items-center justify-between  font-bold text-3xl'>
                <span>{orderNumber}</span>
                <button className='text-black ' onClick={() => transferToNowServing(orderNumber)} >
                  ←
                </button>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
