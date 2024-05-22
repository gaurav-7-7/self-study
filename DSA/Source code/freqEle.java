import java.util.HashMap;
import java.util.Map;

public class freqEle {
    public static void main(String[] args) {
        int[] n = {1,1,1,2,2,3,3,3,3,4};
        freq(n, n.length);
    }
    public static void freq(int[] arr, int n){
        Map<Integer, Integer> map = new HashMap<>();
        for(int e = 0; e < n; e++) {
            if(map.containsKey(arr[e]))
                map.put(arr[e], map.get(arr[e])+1);
            else
                map.put(arr[e], 1);
        }
        for (Map.Entry<Integer,Integer> e : map.entrySet())
            System.out.println(e.getKey() + " " + e.getValue());
    }
}