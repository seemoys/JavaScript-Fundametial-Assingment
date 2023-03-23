let color1=prompt("Enter the color 1");
let color2=prompt("Enter the color 1");

switch(color1){
    case "red":
        switch(color2){
            case "blue":
                document.write("Purple");
                break;
            case "yellow":
                document.write("Orange"); 
                break;
            default:
                document.write("Invalid color combination");
                break;  
        }
        break;
        case "blue":
            switch(color2){
                case "red":
                    document.write("Purple");
                    break;
                case "yellow":
                    document.write("Green");
                    break;
                default:
                    document.write("Invalid color combination");
                    break;
            }
        break;
        case "yellow":
            switch(color2){
                case "red":
                    document.write("Orange");
                    break;
                case "blue":
                    document.write("Green");
                    break;
                default:
                    document.write("Invalid color combination");
                    break;
                }
}

