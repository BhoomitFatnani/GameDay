import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Analyze {

    public static void main(String[] args) {
        String fileName = "Data.csv";
        File file = new File(fileName);

        try {
            Scanner inputStream = new Scanner(file);
            while (inputStream.hasNextLine()) {
                String line = inputStream.nextLine();
                String[] data = line.split(","); // Split line by comma
                for (String value : data) {
                    System.out.print(value.trim() + " | "); // Print each value trimmed
                }
                System.out.println();
            }
            inputStream.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
