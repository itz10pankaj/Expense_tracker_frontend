import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import React, { useState, useMemo } from 'react'
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalContext } from "./Context/globalContext";

function App() {
  const AppStyled = styled.div`
  height:100vh;
  background-image:url(${bg}})
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;
  const [active, setActive] = useState(1);
  const { getIncomes } = useGlobalContext()

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }
  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])
  return (
    <AppStyled className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );

}


export default App;
