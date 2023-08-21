import "./Main.css";
import graphChart from "../../assets/images/graph.png";
import pieChart from "../../assets/images/piechart.svg";
import infoIcon from "../../assets/images/info.svg";

const Main = () => {
  return (
    <div>
        <h1>Boshqaruv</h1>
        <div className="charts">
          <div className="piechart">
            <h2>O’quvchilar oqimi</h2>
            <img src={pieChart} />
            <div className="davomat">
              <div className="kelmaganlar">
                <div className="circle"></div>
                <p>kelmaganlar</p>
              </div>
              <strong>66 ta</strong>
            </div>
            <div className="davomat">
              <div className="kelmaganlar">
                <div className="circle2"></div>
                <p>kelganlar</p>
              </div>
              <strong>129 ta</strong>
            </div>
          </div>
          <div className="graphchart">
            <img src={graphChart} />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>O’qtuvchi ismi</th>
              <th>O’rtacha oylik maoshi</th>
              <th>Guruhlari soni</th>
              <th>O’quvchilari soni</th>
              <th>To’lov qilmaganlar soni</th>
            </tr>
          </thead>
          <tbody>
            <tr className="body__tr">
              <td className="name">John Doe Lemoni</td>
              <td>12.000.000 so’m</td>
              <td>10 ta</td>
              <td>116ta</td>
              <td>16ta</td>
              <td><a href="#"><img src={infoIcon} /></a></td>
            </tr>

            <tr className="body__tr">
              <td className="name">Will Smith Alexdanre...</td>
              <td>4.000.000 so’m</td>
              <td>7 ta</td>
              <td>60ta</td>
              <td>6ta</td>
              <td><a href="#"><img src={infoIcon} /></a></td>
            </tr>

            <tr className="body__tr">
              <td className="name">Will Smith Alexdanre...</td>
              <td>4.000.000 so’m</td>
              <td>7 ta</td>
              <td>60ta</td>
              <td>6ta</td>
              <td><a href="#"><img src={infoIcon} /></a></td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Main