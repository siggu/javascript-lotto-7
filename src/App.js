import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('구입금액을 입력해 주세요.');
    const lottoCount = await Console.readLineAsync('');
  }
}

export default App;
