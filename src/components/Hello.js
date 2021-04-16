
import React from 'react'

class Hello extends React.Component {
    render(){
    let data = this.props.name;
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-md-12">
                    <div className="case text-body">         
                    <p>ติดเชื้อสะสม</p>
                    <h1>{data.Confirmed}</h1>
                    <span>
                    [+{data.NewConfirmed}]
                    </span>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="recover text-body">         
                    <p>หายแล้ว</p>
                    <h1>{data.Recovered}</h1>
                    <span>
                    [+{data.NewRecovered}]
                    </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="hospital text-body">         
                    <p>รักษาที่ รพ.</p>
                    <h1>{data.Hospitalized}</h1>
                    <span>
                    [+{data.NewHospitalized}]
                    </span>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="died text-body">         
                    <p>ตาย</p>
                    <h1>{data.Deaths}</h1>
                    <span>
                    [+{data.NewDeaths}]
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
export default Hello;