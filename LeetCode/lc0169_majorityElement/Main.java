package LeetCode.lc0169_majorityElement;

import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[] testOne = { 3, 2, 3 };
    int[] testTwo = { 2, 2, 1, 1, 1, 2, 2 };
    System.out.println(majorityElement(testOne)); // 3
    System.out.println(majorityElement(testTwo)); // 2
  }

  public static int majorityElement(int[] nums) {
    Arrays.sort(nums);
    return nums[(int) nums.length / 2];
  }
}
