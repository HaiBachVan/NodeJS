import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;


public class Rq {
	public static void main(String[] args) throws MalformedURLException, IOException{
		String url="";
		int n = 0;
		if (args.length == 1){
			n = Integer.parseInt(args[0]);
			url = "http://localhost:8080";
		}
		else if (args.length == 2){
			url = args[0];
			n = Integer.parseInt(args[1]);
		}
		for (int i=0; i< n; i++)
			new Request(url).start();
	}
}
class Request extends Thread {
	public Request(String url) throws MalformedURLException, IOException {
		// TODO Auto-generated constructor stub
		URLConnection uc = new URL(url).openConnection();
		InputStream raw = uc.getInputStream( );

        InputStream buffer = new BufferedInputStream(raw);       

        // chain the InputStream to a Reader

        Reader r = new InputStreamReader(buffer);

        int c;

        while ((c = r.read( )) != -1) {
        } 

	}
	@Override
	public void run() {
		// TODO Auto-generated method stub
		super.run();
	}
}