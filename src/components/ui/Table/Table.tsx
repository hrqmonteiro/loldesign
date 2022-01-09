export default function Table() {
  return (
    <div className="flex justify-center">
      <table className="table w-full table-zebra px-6">
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th className="font-bold">$ (Minuto)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>011</td>
            <td>016</td>
            <td>1.90</td>
          </tr>
          <tr>
            <td>016</td>
            <td>011</td>
            <td>2.90</td>
          </tr>
          <tr>
            <td>011</td>
            <td>017</td>
            <td>1.70</td>
          </tr>
          <tr>
            <td>017</td>
            <td>11</td>
            <td>2.70</td>
          </tr>
          <tr>
            <td>011</td>
            <td>018</td>
            <td>0.90</td>
          </tr>
          <tr>
            <td>018</td>
            <td>011</td>
            <td>1.90</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
