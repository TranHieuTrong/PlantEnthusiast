import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const QA = () => {
  const [expanded, setExpanded] = useState({});
  const navigation = useNavigation();

  const toggleExpand = index => {
    setExpanded(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const goBackToProfile = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={myStyles.container}>
      <View style={myStyles.containerHeader}>
        <TouchableOpacity
          onPress={goBackToProfile}
          style={myStyles.iconContainer}>
          <Image
            style={myStyles.icon}
            source={require('../images/ic_back.png')}z
          />
        </TouchableOpacity>
        <View style={myStyles.titleCenter}>
          <Text style={myStyles.title}>Q & A</Text>
        </View>
      </View>
      <ScrollView style={myStyles.body}>
        {QandA.map((QandA, index) => (
          <View key={index} style={myStyles.questionContainer}>
            <View style={myStyles.question}>
              <Text style={myStyles.txtQuestion}>{QandA.question}</Text>
              <TouchableOpacity onPress={() => toggleExpand(index)}>
                <Image
                  style={[myStyles.iconUpDown, {alignSelf: 'center'}]}
                  source={
                    expanded[index]
                      ? require('../images/up.png')
                      : require('../images/down.png')
                  }
                />
              </TouchableOpacity>
            </View>
            {expanded[index] && (
              <Text style={myStyles.txtAnswer}>{QandA.answer}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default QA;

const myStyles = StyleSheet.create({
  txtQuestion: {
    marginTop: 10,
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    lineHeight: 20,
    flex: 1,
  },
  txtAnswer: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    lineHeight: 25,
    marginTop: 15,
  },
  iconUpDown: {
    width: 24,
    height: 24,
  },
  body: {
    flexDirection: 'column',
    padding: 15,
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  questionContainer: {
    marginBottom: 10,
  },
  titleCenter: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#000000',
  },
  icon: {
    width: 25,
    height: 25,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 25,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

const QandA = [
  {
    question: 'Tôi trộn các chất dinh dưỡng theo thứ tự nào?',
    answer:
      'A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.',
  },
  {
    question: 'Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?',
    answer:
      'Dinh dưỡng cao cấp nên ko có hạn sử dụng, chỉ cần bảo quản tốt dưới nhiệt độ mát, tránh ánh sáng trực tiếp là sẽ để được rất lâu, Để duy trì mức dinh dưỡng tối ưu, chúng tôi khuyên bạn nên thay đổi hồ chứa thuỷ canh của bạn sau mỗi 7 ngày, còn với thổ canh thì pha lần nào tưới lần đó, thừa thì bỏ lần sau pha mới. Đặc biệt có vi sinh Mycorrhizae có hạn sử dụng sau 2 năm kể từ ngày mua.',
  },
  {
    question: 'Khi nào tôi thêm bộ điều chỉnh pH?',
    answer:
      'Sau khi bạn thêm A-F nhưng trước khi bạn thêm line E Root Igniter vào thì phải căn chỉnh pH trước rồi. PH tối ưu là giữa 5,8-6,3, nấm rễ phát triển tốt hơn khi pH chuẩn, dinh dưỡng đủ. Bạn cần thêm 1 số công cụ bút đo nữa nhé.',
  },
  {
    question:
      'Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Planta không?',
    answer:
      'Không. Chúng tôi không sử dụng bất kỳ chất điều chỉnh tăng trưởng nào trong dòng Nutrient của mình. Điều này bao gồm Paclobutrazol và Daminozide, được chứng minh là có ảnh hưởng tiêu cực đến sức khỏe khi con người ăn phải, đặc biệt là Ung Thư.',
  },
  {
    question: 'Các sản phẩm Planta có phải là hữu cơ không?',
    answer:
      'Các sản phẩm dinh dưỡng của chúng tôi là sự pha trộn của tất cả các thành phần hữu cơ và vô cơ tự nhiên, không chứa hormone, nước hoa, thuốc nhuộm hoặc chất điều hòa tăng trưởng. Chúng đã được thiết kế đặc biệt để tối đa hóa khả dụng sinh học của các chất dinh dưỡng để hấp thụ và hiệu quả tối ưu. Chúng tôi hiểu được sự hấp thụ của một khu vườn hữu cơ. Quan trọng hơn, độ chính xác như vậy mang lại kết quả vượt trội với một giải pháp hoàn toàn hữu cơ. Chúng tôi tiếp tục phát triển các sản phẩm hữu cơ để thử nghiệm và sẽ cung cấp cho các thị trường dựa trên những kết quả chúng tôi thu thập được .',
  },
];
