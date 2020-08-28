import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
  
export const Title = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.selected ? "#00fc6c" : '#FFF'};
  font-weight: ${(props) => props.selected ? 'bold' : 'normal'};
  font-size: 16px;
`;

export const Card = styled.View`
  background: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: #FFF;
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: #FFF;
  font-size: 20px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #F75175;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 2px;
  height: 13px;
  background: rgba(255,255,255,0.4);
  margin: 0 10px;
`;

export const Date = styled.Text`
  color: #FFF;
  margin-left: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
  align-items: center;
`;

export const OptionLabel = styled.Text`
  color: #FFF;
  font-size: 14px;
  margin-left: 5px;
`;

