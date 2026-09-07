#include<iostream>
using  namespace std;
void reverseanArray(vector<int>nums){
    int n=nums.size();
    for(int i=0;i<n/2;i++){
        int temp=nums[i];
        nums[i]=nums[n-i-1];
        nums[n-i-1]=temp;
    }
    for(int i=0;i<nums.size();i++){
        
    }
}