import React, { useState } from "react";
import { useGetPortfoliosQuery } from "../../redux/Feature/portfolio/api/apiSlice";
import "./portfolio.css";
import PortfolioSingle from "./PortfolioSingle";
const Portfolio = () => {
    const [toggle, setToggle] = useState(true);
    const handlerButton = () => {
        setToggle((e) => !e);
    };
    const {
        isError,
        isLoading,
        data: portfolio,
        error,
    } = useGetPortfoliosQuery();
    let content = null;
    if (isLoading) {
        content = <h1>Your Portfolio isLoading</h1>;
    }
    if (!isLoading && isError) {
        content = <h1>`You have an ${error} occured...`</h1>;
    }
    if (!isLoading && !isError && portfolio?.length === 0) {
        content = <h1>You have no Portfolio</h1>;
    }
    if (!isLoading && !isError && portfolio?.length > 0 && toggle === true) {
        content = portfolio.slice(0, 2).map((data, index) => {
            return <PortfolioSingle key={index} data={data} />;
        });
    }
    if (!isLoading && !isError && portfolio?.length > 0 && toggle === false) {
        content = portfolio.map((data, index) => {
            return <PortfolioSingle key={index} data={data} />;
        });
    }
    return (
        <div>
            <p className="p-p">PORTFOLIO</p>
            <p className="p-f">Featured Projects</p>
            <div className="img-slider">{content}</div>
            <div className="btn-div">
                <button className="btn-load" onClick={handlerButton}>
                    {toggle === true ? `Lode More` : `Lode Less`}
                </button>
            </div>
        </div>
    );
};

export default Portfolio;
