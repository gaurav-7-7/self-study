import java.sql.Array;
import java.sql.SQLOutput;
import java.util.*;
import java.math.*;

public class Main {
    public static void main(String[] args) {
        int[] n = {1,2,3,4,5,6};
        int[] n1 = {-7, -8, -16, -4 ,-8 ,-5 ,-7 ,-11 ,-10, -12 ,-4, -6 ,-4 ,-16, -10 };
        int[] n2 = {1,2,3,4};
        int a[][] = {
                {4, 1, 3},
                {3, 5, 7},
                {8, 2, 6}
        };
        ArrayList<Integer> a1 = new ArrayList<>(Arrays.asList(1,2,3,4));
        ArrayList<Integer> b = new ArrayList<>(Arrays.asList(4,5));
        String s = "I am good asidohfoas fdaso dfas dfhoasihf ioqwhre a oqw d qwiohf oqwihfoq iwphfo qwf qwe woie";
//        quickSortR(n2, 0, n.length - 1);
//        System.out.println("Sorted array:");
//        for (int i : n2) {
//            System.out.print(i + " ");
//        }
        System.out.println(kthSmallLarge(n2, 2));
//        System.out.println(kadanes(n1, n1.length));
//        System.out.println(similarityArray(a1,b,a1.size(),b.size()));
    }

    public static int largest(int[] arr, int n){
        int l = arr[0];
        for (int i = 1; i < n; i++) {
            if(l < arr[i])
                l = arr[i];
            else
                i++;
        }
        return l;
    }

    public static int smallest(int[] arr, int n){
        int s = arr[0];
        for (int i = 0; i < n; i++) {
            if(s > arr[i])
                s = arr[i];
            else
                i++;
        }
        return s;
    }

    public static Set<Integer> removeDuplicate(int[] arr, int n){
        Set<Integer> set = new HashSet<Integer>();
        for (int i = 0; i < n; i++)
            set.add(arr[i]);
        return set;
    }

    public static void OddEven(int[] arr, int n) {
        Set<Integer> odd = new HashSet<>();
        Set<Integer> even = new HashSet<>();
        for(int i = 0; i < n; i++) {
            if(arr[i] % 2 == 0)
                even.add(arr[i]);
            else
                odd.add(arr[i]);
        }
        System.out.println("Array elements that are odd: "+odd);
        System.out.println("Array elements that are even: "+even);
    }

    public static void countOddEvenMatrix(int[][] arr, int n, int m){
        int evenCount = 0, oddCount = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if(arr[i][j]%2==0)
                    evenCount++;
                else
                    oddCount++;
            }
        }
        System.out.println("No.of ODD elements: "+ oddCount);
        System.out.println("No.of EVEN elements: "+ evenCount);
    }

    public static void largestAndSmallest(String s) {
        Map<Integer, String> map = new HashMap<>();
        String[] stringArray = s.split(" ");
        for(String word: stringArray){
            map.put(word.length(), word);
        }
        int max = Collections.max(map.keySet());
        int min = Collections.min(map.keySet());
        System.out.println("Largest word: "+map.get(max) + "\n" + "Largest word: "+map.get(min));
    }

    public static void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    public static int partition(int[] arr, int l, int h){
        int p = arr[l];
        int i = l;
        for (int j = l + 1; j <= h; j++) {
            if (arr[j] < p){
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, l, i);
        return i;
    }

    public static void quickSortR(int[] arr, int l, int h){
        if(l < h){
            int p = partition(arr, l, h);
            partition(arr, l, p - 1);
            partition(arr ,p + 1, h);
        }
    }

    public static ArrayList<Integer> kthSmallLarge(int[] nums, int k){
        ArrayList<Integer> res = new ArrayList<>();
        PriorityQueue<Integer> minH = new PriorityQueue<Integer>();
        PriorityQueue<Integer> maxH = new PriorityQueue<Integer>((a, b) -> b - a);
        for (int i : nums){
            minH.add(i);
            if(minH.size() > k)
                minH.remove();
        }
        for(int j : nums){
            maxH.add(j);
            if(maxH.size() > k)
                maxH.remove();
        }
        res.add(minH.remove());
        res.add(maxH.remove());
        return res;
    }

    public static int kadanes(int[] arr, int n){
        int sum = arr[0];
        int currentSum = sum;
        for(int i = 1; i < n; i++){
            currentSum = Math.max(arr[i] + currentSum, arr[i]);
            sum = Math.max(currentSum, sum);
        }
        return sum;
    }

    public static ArrayList<Integer> similarityArray(ArrayList<Integer> a1, ArrayList<Integer> a2, int n, int m){
        ArrayList<Integer> intersection = new ArrayList<>();
        ArrayList<Integer> res = new ArrayList<>();
        HashSet<Integer> union = new HashSet<>();
        union.addAll(a1);
        union.addAll(a2);
        if((a1.size() == 0) || (a2.size() == 0))
            return res;
        HashSet<Integer> h = new HashSet<>();
        for (int i = 0; i < n; i++)
            h.add(a1.get(i));
        for(int j = 0; j < m; j++){
            if (h.contains(a2.get(j)))
                intersection.add(a2.get(j));
        }
        res.add(intersection.size());
        res.add(union.size());
        return res;
    }

    
}