import styled from 'styled-components';

export const PAGE_WRAPER = styled.div`
  padding: 0 15px;
  position: relative !important;
  flex-shrink: 1;
  width: calc(100% - 220px);
`;

export const NAVBAR = styled.nav`
  background-color: transparent;
  border-color: #2f4050;
  width: 220px;
  border-left: 4px solid #19aa8d;
  background: #293846;
  height: 100vh;
`;

export const TOPO = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  border-bottom: 1px solid #e7eaec !important;

  nav {
    padding: 0;
    width: 100%;
    align-items: inherit;
    background: #f3f3f4;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
`;

export const DASHBOARD_HEADER = styled.div`
  border-top: 0;
  padding: 20px 20px 20px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e7eaec !important;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 289px;
`;

export const DASHBOARD_FOOTER = styled.div`
  border-top: 0;
  padding: 20px 20px 20px 20px;
  background-color: #ffffff;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: 289px;
`;

export const CARD = styled.div`
  border-top: 0;
  padding: 20px 20px 20px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e7eaec !important;
  display: inline-block;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  margin: 5px;
`;
