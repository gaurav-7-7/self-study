import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class patterns {
    public static void main(String[] args) {
        int[] arr = new int[]{4,12,5,1,3};
        ArrayList<Integer> list1 = new ArrayList<>();
        list1.add(4);
        list1.add(5);
        list1.add(9);
        list1.add(12);

        ArrayList<Integer> list2 = new ArrayList<>();
        list2.add(9);
        list2.add(11);
        list2.add(17);
        list2.add(20);

        int[] arr1 = {4,5,9,12,0,0,0,0};
        int[] arr2 = {11,17,20};

        int[] a = {2,3,4};
        int[] b = {5,6,7};

        System.out.println("Smallest element in provided array is: " + smallest(arr)[0] +"\n"
                + "Smallest element in provided array is: " + smallest(arr)[1]);
        System.out.println(mergeList(list1,list2));
        System.out.println(Arrays.toString(mergeArrays(arr1,4, arr2, 3)));
        mergeWithSpace(a,b);
    }

    public static int[] smallest(int[] arr) {
        int[] res = {Integer.MAX_VALUE, Integer.MIN_VALUE};
        for(int i : arr){
            res[0] = i < res[0] ? i : res[0];
            res[1] = i > res[1] ? i : res[1];
        }
        return res;
    }

    public static ArrayList<Integer> mergeList(ArrayList<Integer> list1, ArrayList<Integer> list2){
        list1.addAll(list2);
        Collections.sort(list1);
        return list1;
    }

    public static int[] mergeArrays(int[] a1,int m, int[] a2, int n) {
        int p1 = m - 1, p2 = n - 1, i = m + n - 1;
        while(p2 >= 0) {
            if(p1 >= 0 && a1[p1] > a2[p2])
                a1[i--] = a1[p1--];
            else
                a1[i--] = a2[p2--];
        }
        return a1;
    }

    public static double medianOfArrays(int[] a1, int[] a2) {
        double res = 0.00;

        return res;
    }
}
