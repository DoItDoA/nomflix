import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"), // 경로에 "/movie/"가 있는지 판단
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      }, // show/:id 나 movie/:id의 :id값을 가져옴
      history: { push },
    } = this.props; // Route를 통해 왔으므로 prop가 자동 할당

    const { isMovie } = this.state;
    const parsedId = parseInt(id); // 문자열을 정수화

    if (isNaN(parsedId)) {
      return push("/"); // history안의 push 함수(f표시는 함수의미)를 이용하여 이동, return이용하여 componentDidMount종료
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId)); // let result에 ES6방식으로 데이터를 저장하기 위해서 전체 괄호를 친다
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
