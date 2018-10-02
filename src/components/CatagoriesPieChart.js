import React from 'react'
import PieChart from 'react-minimal-pie-chart';
import { Consumer } from '../context';


const CatagoriesPieChart = () => {
    return (
        <Consumer>
            {value => {
                const { catagories } = value;
                return (
                    <div>
                        <div className="row d-flex justify-content-center my-3 mx-0">
                            <div className="col-lg-5 col-md-7 col-sm-10">
                                <div className="container">
                                    <PieChart
                                        data={catagories}
                                        animate={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );
}


export default CatagoriesPieChart;