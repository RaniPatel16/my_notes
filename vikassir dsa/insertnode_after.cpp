#include<iostream>
using namespace std;
struct node{
    int value;
    node*address;

};
void insertinBetween(node*n0,node*n4){
    node *i=n0;
    while(i != NULL){
    if(i->value==5){
        node *temp=i->address;
        i->address=n4;
        n4->address=temp;
        break;
    }
    i=i->address;
}

}
int main(){
    node*n0=new node();
     node*n1=new node();
      node*n2=new node();
       node*n3=new node();
      n0->value = 10;
n0->address = n1;

n1->value = 5;
n1->address = n2;

n2->value = 15;
n2->address = n3;

n3->value = 25;
n3->address = NULL;

node* n4 = new node();

n4->value = 21;
n4->address=NULL;
insertinBetween(n0,n4);
return 0;
}