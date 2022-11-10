import React from "react";

interface GreeterProps {
	person: string;
	id: string;
}

function Greeter({ person, id }: GreeterProps): JSX.Element {
	return <h1>Hello {person}!</h1>;
}
// const Greeter: React.FC = () => {
// 	return <h1>Hello!</h1>;
// };
export default Greeter;
