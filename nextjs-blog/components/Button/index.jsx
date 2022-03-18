import Link from "next/link";

export default function Button({ color = "", text = "", href = "" }) {
  var colorSelected = "orange";
  switch (color) {
    case "orange":
      colorSelected = "#F8B780";
      break;
    case "lightgreen":
      colorSelected = "#C1E8B4";
      break;
    case "green":
      colorSelected = "#088A43";
      break;
    default:
      colorSelected = "#F7F7F7";
      break;
  }
  return (
    <Link href={href}>
      <button
        style={{
          backgroundColor: colorSelected,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          fontFamily: "sans-serif",
          width: "fit-content",
          borderRadius: 5,
          fontSize: 12,
          borderStyle: "none",
        }}
      >
        {text}
      </button>
    </Link>
  );
}
