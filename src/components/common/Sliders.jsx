import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Sliders = ({children}) => (
  <Carousel autoplay arrows draggable infinite={false} slidesToShow={4} >
    {children}
  </Carousel>
);
export default Sliders;