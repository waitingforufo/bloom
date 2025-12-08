import { render, screen, fireEvent } from "@testing-library/react";
// import SmartRating from "./SmartRating";

test("SmartRating组件测试1", () => {

  // DOM方式运行(create-react-app)时候用,node方式(后台,不是浏览器)运行时不能使用
  //render(<SmartRating title="SmartRating" theme="primary" testIdPrefix="rating" />);
  //const stars = screen.getAllByRole("button");
  //fireEvent.click(stars[2]);  // 点击第三个星星
  // expect(stars[2]).toHaveClass("starActive");

  console.log("The message from jest.");
});