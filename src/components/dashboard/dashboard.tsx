import * as React from 'react';

export const Dashboard = (props) => {
  const openPage = (l: 'co' | 'us') => {
    if (l === 'us') { window.location.href = 'https://shop.tarch.co'; return; }
    if (l === 'co') { window.location.href = 'https://colombia.tarch.co'; return; }
  };
  return <>
    <div className={'p0'}>
      <div className={`p0-mobile`}>
        <div>
          <Logo style={{ fontSize: 68, color: 'white' }} />
          <div className={`p0-mobile-lang`}>
            <div style={{textAlign: 'center', marginBottom: 12}}>SHOP</div>

            <div className={`p0-mobile-lang-fl`} style={{ marginBottom: 12 }} onClick={e => openPage('us')}>
              <img src={'images/mobile-us.png'} width={50} height={25} />
              <div style={{fontSize: 8}}>USD</div>
            </div>
            <div className={`p0-mobile-lang-fl`} onClick={e => openPage('co')}>
              <img src={'images/mobile-cop.png'} width={50} height={25} />
              <div style={{fontSize: 8}}>COP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className={'footer'}>
      <div style={{fontSize: 10}}>
        Copyright © 2022 Andros Baltazar S.A.S.
      </div>
      <br /><br />
      <h4>
        <a href={'mailto:support@tarch.co'}>support@tarch.co</a> - +57 301-232-9000
        <br />
        Carrera 25 # 12 sur 59, Medellin - Colombia
      </h4>
    </div>
  </>
}

const Logo = (props: {style: any}) => <div style={props.style}>
  <span className="ic-LOGO-TARCH"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></span>
</div>;
