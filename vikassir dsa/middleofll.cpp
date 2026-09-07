#include<iostream>
using namespace std;
struct node{
    int val;
    node* nxt;
};

void middle(node* n0){
    int count = 0;
    node* curr = n0;
    while(curr != NULL){
        count++;
        curr = curr->nxt;
    }
    
    int pos = (count/2) ;
    
    curr = n0;
    for(int i = 0 ; i<pos ; i++){
        curr = curr->nxt;
    }
    
    while(curr != NULL){
        cout << curr->val << endl;
        curr = curr->nxt;
    }
    // return curr;
    
}
int main(){
    
    node* n0 = new node();
    node* n1 = new node();
    node* n2 = new node();
    node* n3 = new node();
    node* n4 = new node();
    
    n0->val = 1;
    n1->val = 2;
    n2->val = 3;
    n3->val = 4;
    n4->val = 5;
    
    n0->nxt = n1;
    n1->nxt = n2;
    n2->nxt = n3;
    n3->nxt = n4;
    n4->nxt = NULL;
    
    middle(n0);
    


    
    
    
    
    return 0;
}