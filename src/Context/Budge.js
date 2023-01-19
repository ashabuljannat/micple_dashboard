// export const count_result = (array) => {
//   const count = {};
//   const result = [];

//   array.forEach((item) => {
//     if (count[item]) {
//       count[item] += 1;
//       return;
//     }
//     count[item] = 1;
//   });

//   for (let prop in count) {
//     if (count[prop] >= 1) {
//       result.push(prop);
//     }
//   }
//   return count;
// };

// export default function Button({ name, clickedButtonHandler }) {
//   const [activeButton, setActiveButton] = useState(true);

//   const Button = styled.button`
//     background: ${activeButton ? "red" : "white"};
//     color: ${(props) => (props.c_w ? "white" : "palevioletred")};
//     font-size: 1em;
//     margin: 1em;
//     padding: 0.25em 1em;
//     border: 2px solid palevioletred;
//     border-radius: 3px;
//   `;

//   return (
//     <Button name={name} onClick={clickedButtonHandler}>
//       {name}
//     </Button>
//   );
// }

// export const matcher_data = (a, b) => {
//   if (a === b) {
//     return a;
//   }

// };

export const count_data = (a) => {
  let countMap = new Map();
  a.forEach((num) => {
    countMap.set(num, countMap.has(num) ? countMap.get(num) + 1 : 1);
  });
  let countArray = Array.from(countMap.entries()).map(([name, count]) => ({
    name,
    count,
  })); 
  return countArray;
};
