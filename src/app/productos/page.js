
import Navbar from '@/app/components/navbar';
import Tabla from '@/app/components/TablaCont';


async function getData() {
  const res = await fetch('http://127.0.0.1:8000/productos/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  var rows =[]
  var columns =[]
  const cols=Object.keys(data[0])
  for(var i = 0; i<cols.length; i++){
    columns.push({key:cols[i], label:cols[i]})

  }

  for(var i = 0; i<data.length; i++){
    var row =data[i];
    row.key = data[i].id_producto;
    rows.push(row);

  }
  console.log(rows)
  console.log(columns)
  return (
    
    <main className="flex min-h-screen flex-col  ">
      <Navbar/>
      <Tabla  rows={rows} columns={columns}/>
    </main>
  );
}
