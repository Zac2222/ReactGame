import { Badge } from "@chakra-ui/react";

interface Props{
    score: number;
}

const CriticScore = ({score}:Props) => {

    const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    //we cant see the project yet, but its possible the the numbers should not be in the {} when its the px, maybe its just for numbers, who knows i dont know
    <Badge colorScheme={color} fontSize='15px' padding={2} borderRadius={'10px'}> 
        {score}
    </Badge>
  
  )
}

export default CriticScore
