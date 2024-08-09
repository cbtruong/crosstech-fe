import Content from "../../components/content/Content";
import Header from "../../components/header/Header";
import FootDog from '../../assets/foot.png';

const HomePage = () => {
  return (
    <div className="relative">
      <Header/>
      <Content/>
      <img src={FootDog} className="absolute top-[135px] right-[14%]" alt="" />
      <img src={FootDog} className="absolute top-[165px] right-[8%] rotate-[-40deg]" alt="" />
      <img src={FootDog} className="absolute top-[255px] right-[7%]" alt="" />
      <img src={FootDog} className="absolute top-[270px] right-[1%] rotate-[-16deg]" alt="" />
    </div>

  )
}

export default HomePage
