import React from 'react';
import './index.css';
import './media.css';
import IconUnit from './components/IconUnit.jsx';
import WinPortfolio from './components/WinPortfolio.jsx';
import WinRPG from './components/WinRPG.jsx';
import WinLibrary from './components/WinLibrary';
import WinGallery from './components/WinGallery';


const Desk = () => {
    // render() {
        return (
            <div className="desk">
                <div className="iconContainer">
                    <IconUnit text='Portfolio' classNm="iconMe"></IconUnit>
                    <IconUnit text='Library' classNm="iconBooks"></IconUnit>
                    <IconUnit text='Achievements' classNm="iconAch"></IconUnit>
                    <IconUnit text='Gallery' classNm="iconGal"></IconUnit>
                    <IconUnit text='RPG' classNm="iconRPG"></IconUnit>
                </div>

                <WinPortfolio></WinPortfolio>
                <WinRPG></WinRPG>
                <WinLibrary></WinLibrary>
                <WinGallery></WinGallery>
            </div>
            );
    // }
}

export default Desk;