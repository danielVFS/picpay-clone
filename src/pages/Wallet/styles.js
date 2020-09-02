import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
}))`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;  
  align-items: center;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0px;

  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #FFF;
  font-size: 38px;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #FFF;
  font-size: 14px;
`;

export const Actions = styled.View`
  margin-top: 40px;
  flex-direction: row;
`;

export const Action = styled.TouchableOpacity`
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ActionLabel = styled.Text`
  color: #FFF;
  font-size: 16px;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background: #1C1C1E;
  height: 60px;
  padding: 0 16px;

  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
`;

export const Card = styled.View`
  background-color: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const CardInfo = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 15px;
`;

export const CardImg = styled.Image`
  width: 60px;
`;

export const x = styled.View``;

