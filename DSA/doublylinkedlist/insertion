#include <iostream>
using namespace std;

// Node
class Node
{
public:
    int data;
    Node *prev;
    Node *next;

    Node(int value)
    {
        data = value;
        prev = NULL;
        next = NULL;
    }
};

// Doubly Linked List
class DoublyLinkedList
{
private:
    Node *head;
    Node *tail;

public:

    // Constructor
    DoublyLinkedList()
    {
        head = NULL;
        tail = NULL;
    }

    // =========================================
    // INSERT AT FIRST
    // =========================================
    void insertAtFirst(int data)
    {
        Node *temp = new Node(data);

        // Case 1: List is empty
        if (head == NULL)
        {
            head = temp;
            tail = temp;
            return;
        }

        // Case 2: List already has nodes
        temp->next = head;
        head->prev = temp;
        head = temp;
    }


    // =========================================
    // INSERT AT LAST
    // =========================================
    void insertAtLast(int data)
    {
        Node *temp = new Node(data);

        // Case 1: List is empty
        if (head == NULL)
        {
            head = temp;
            tail = temp;
            return;
        }

        // Case 2: List already has nodes
        temp->prev = tail;
        tail->next = temp;
        tail = temp;
    }


    // =========================================
    // INSERT IN BETWEEN
    // Insert AFTER target value
    // =========================================
    void insertInBetween(int targetValue, int data)
    {
        // Case 1: List is empty
        if (head == NULL)
        {
            cout << "List is empty." << endl;
            return;
        }

        // Find target node
        Node *temp1 = head;

        while (temp1 != NULL && temp1->data != targetValue)
        {
            temp1 = temp1->next;
        }

        // Target not found
        if (temp1 == NULL)
        {
            cout << "Target value not found." << endl;
            return;
        }

        // Create new node
        Node *temp = new Node(data);

        // Connect new node to next node
        temp->next = temp1->next;

        // Connect new node to target node
        temp->prev = temp1;

        // Connect target node to new node
        temp1->next = temp;

        // If there is a node after new node
        if (temp->next != NULL)
        {
            temp->next->prev = temp;
        }

        // If inserted after last node
        if (temp->next == NULL)
        {
            tail = temp;
        }
    }


    // =========================================
    // DISPLAY FORWARD
    // =========================================
    void displayForward()
    {
        if (head == NULL)
        {
            cout << "No Nodes are there." << endl;
            return;
        }

        Node *temp = head;

        cout << "Forward: ";

        while (temp != NULL)
        {
            cout << temp->data << " ";
            temp = temp->next;
        }

        cout << endl;
    }


    // =========================================
    // DISPLAY BACKWARD
    // =========================================
    void displayBackward()
    {
        if (head == NULL)
        {
            cout << "No Nodes are there." << endl;
            return;
        }

        Node *temp = tail;

        cout << "Backward: ";

        while (temp != NULL)
        {
            cout << temp->data << " ";
            temp = temp->prev;
        }

        cout << endl;
    }
};


// =============================================
// MAIN
// =============================================
int main()
{
    DoublyLinkedList list;

    // Insert at first
    list.insertAtFirst(20);
    list.insertAtFirst(10);

    // Insert at last
    list.insertAtLast(40);
    list.insertAtLast(50);

    // Insert 30 after 20
    list.insertInBetween(20, 30);

    // Display
    list.displayForward();
    list.displayBackward();

    return 0;
}