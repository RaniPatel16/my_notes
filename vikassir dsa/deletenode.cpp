#include <iostream>
using namespace std;

struct node {
    int value;
    node* address;
};

void deleteNode(node* n1) {
    node* temp = n1->address;

    // Copy next node's value
    n1->value = temp->value;

    // Skip the next node
    n1->address = temp->address;

    // Disconnect the skipped node
    temp->address = NULL;

    delete temp;
}

int main() {
    // Create nodes
    node* n0 = new node();
    node* n1 = new node();
    node* n2 = new node();
    node* n3 = new node();

    // Create linked list
    n0->value = 4;
    n0->address = n1;

    n1->value = 5;
    n1->address = n2;

    n2->value = 1;
    n2->address = n3;

    n3->value = 9;
    n3->address = NULL;

    // n1 is the node we want to delete (value 5)
    deleteNode(n1);

    // Print list
    node* temp = n0;

    while (temp != NULL) {
        cout << temp->value << " ";
        temp = temp->address;
    }

    return 0;
}