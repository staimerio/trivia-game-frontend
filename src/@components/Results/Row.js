import { Badge } from "react-bootstrap";

function RowResult({ text, isCorrect }) {
  return (
    <tr>
      <td>
        <Badge variant={isCorrect ? "primary" : "secondary"}>{isCorrect ? "+" : "-"}</Badge>
      </td>
      <td>
        <span className="mx-2">{text}</span>
      </td>
    </tr>
  );
}
export default RowResult;
