# Circular Doubly Linked List — Insertion

A **Circular Linked List** is a linked list in which the last node is connected back to the first node.

In a **Circular Doubly Linked List**, every node contains:

```text
+---------+-------+---------+
|  prev   | data  |  next   |
+---------+-------+---------+
```

- `prev` → points to the previous node.
- `data` → stores the value.
- `next` → points to the next node.
- `head` → points to the first node.
- `tail` → points to the last node.

---

# Circular Linked List

In a circular linked list, the **last node's `next` points to the first node**.

For a circular doubly linked list:

```text
                         head
                          |
                          v
                    +-----------+
                    |           |
              +-----|   10      |-----+
              |     |           |     |
              |     +-----------+     |
              |                       |
              |     +-----------+     |
              +---->|   25      |-----+
                    +-----------+     |
                                      |
                    +-----------+     |
                    |   36      |<----+
                    +-----------+
                         ^
                         |
                        tail
```

The circular connections are:

```text
tail->next = head;
head->prev = tail;
```

There are two directions:

```text
Clockwise
head → next → next → tail → head
```

```text
Anti-Clockwise
head ← prev ← prev ← tail ← head
```

---

# Insertion in Circular Doubly Linked List

Insertion means **adding a new node** to the circular doubly linked list.

There are two types of insertion covered in these notes:

```text
Insertion
    |
    +-- 1. Insertion at First
    |
    +-- 2. Insertion at Last
```

---

# 1. Insertion at First

Insertion at First means adding a new node **before the current first node**.

There are two main cases:

```text
Insertion at First
       |
       +-- Case 1: Empty List
       |
       +-- Case 2: List already contains nodes
```

---

## Case 1: Empty List

If:

```cpp
head == NULL
```

then there are no nodes in the list.

Initially:

```text
head
  |
  v
NULL

tail
  |
  v
NULL
```

Create a new node:

```cpp
Node *temp = new Node(data);
```

Suppose:

```text
data = 10
```

Then:

```text
              head / tail
                   |
                   v
              +---------+
              |   10    |
              +---------+
                ^     |
                |     |
                +-----+
```

### Pointer changes

```cpp
head = temp;
tail = temp;

head->next = head;
head->prev = head;
```

The node points to itself because it is the only node.

---

## Case 1 — Diagram

```text
                    head
                     |
                     v
                +---------+
                |  10     |
                +---------+
                  ^     |
                  |     |
                  +-----+
                     ^
                     |
                    tail
```

Here:

```cpp
head == tail
```

and:

```cpp
head->next = head;
head->prev = head;
```

---

# Case 2: List Already Contains Nodes

Suppose the list already contains nodes:

```text
                         head
                          |
                          v
                    +---------+      +---------+      +---------+
                    |   10    | ---> |   20    | ---> |   35    |
                    +---------+      +---------+      +---------+
                         ^                                  |
                         |                                  |
                         +----------------------------------+
                                      tail
```

We want to insert:

```text
25
```

at the first position.

Create a new node:

```cpp
Node *temp = new Node(data);
```

---

## Step 1: Connect New Node to Head

```cpp
temp->next = head;
```

The new node's `next` points to the old head.

```text
                  temp
                   |
                   v
              +---------+       +---------+
              |   25    | ----> |   10    |
              +---------+       +---------+
```

---

## Step 2: Move Head to New Node

```cpp
head = temp;
```

Now `25` becomes the first node.

```text
                         head
                          |
                          v
                    +---------+      +---------+      +---------+
                    |   25    | ---> |   10    | ---> |   20    |
                    +---------+      +---------+      +---------+
                         ^                                  |
                         |                                  |
                         +----------------------------------+
                                      circular
```

---

## Step 3: Connect New Head's Previous Pointer

```cpp
head->next->prev = temp;
```

The old first node's `prev` now points to the new node.

---

## Step 4: Connect Tail to New Head

```cpp
tail->next = head;
```

The last node's `next` points to the new head.

---

## Step 5: Connect New Head Back to Tail

```cpp
head->prev = tail;
```

The new head's `prev` points to the tail.

---

# Insertion at First — Main Logic

```cpp
temp->next = head;
head = temp;
head->next->prev = temp;
tail->next = head;
head->prev = tail;
```

This maintains the circular connection.

---

# Insertion at First — Diagram

### Before

```text
                         head                              tail
                          |                                  |
                          v                                  v

                    +---------+      +---------+      +---------+
                    |   10    | <--> |   20    | <--> |   35    |
                    +---------+      +---------+      +---------+
                         ^                                  |
                         |                                  |
                         +----------------------------------+
```

### Insert `25`

```text
                         head                              tail
                          |                                  |
                          v                                  v

                    +---------+      +---------+      +---------+      +---------+
                    |   25    | <--> |   10    | <--> |   20    | <--> |   35    |
                    +---------+      +---------+      +---------+      +---------+
                         ^                                                   |
                         |                                                   |
                         +---------------------------------------------------+
```

---

# Insertion at First — Full Logic

```cpp
void insertAtFirst(int data)
{
    Node *temp = new Node(data);

    // Case 1: Empty list
    if (head == NULL)
    {
        head = temp;
        tail = temp;

        head->next = head;
        head->prev = head;

        return;
    }

    // Case 2: List contains nodes
    temp->next = head;

    head = temp;

    head->next->prev = temp;

    tail->next = head;

    head->prev = tail;
}
```

---

# 2. Insertion at Last

Insertion at Last means adding a new node **after the current last node**.

There are two main cases:

```text
Insertion at Last
       |
       +-- Case 1: Empty List
       |
       +-- Case 2: List already contains nodes
```

---

# Case 1: Empty List

If:

```cpp
head == NULL
```

then the list is empty.

Create a new node:

```cpp
Node *temp = new Node(data);
```

Suppose:

```text
data = 10
```

Then:

```text
              head / tail
                   |
                   v
              +---------+
              |   10    |
              +---------+
                ^     |
                |     |
                +-----+
```

Pointer changes:

```cpp
head = temp;
tail = temp;

head->next = head;
head->prev = head;
```

---

# Case 2: List Already Contains Nodes

Suppose:

```text
                         head                              tail
                          |                                  |
                          v                                  v

                    +---------+      +---------+      +---------+
                    |   10    | <--> |   20    | <--> |   25    |
                    +---------+      +---------+      +---------+
                         ^                                  |
                         |                                  |
                         +----------------------------------+
```

We want to insert:

```text
35
```

at the last position.

Create:

```cpp
Node *temp = new Node(data);
```

---

## Step 1: Set New Node's Previous Pointer

```cpp
temp->prev = tail;
```

The new node's `prev` points to the current tail.

```text
                         tail          temp
                          |              |
                          v              v
                    +---------+      +---------+
                    |   25    | <--- |   35    |
                    +---------+      +---------+
```

---

## Step 2: Set New Node's Next Pointer

```cpp
temp->next = head;
```

Because the list is circular, the new last node points back to `head`.

```text
                    +---------+      +---------+
                    |   35    | ----> |   head  |
                    +---------+      +---------+
```

---

## Step 3: Connect Old Tail to New Node

```cpp
tail->next = temp;
```

The old tail now points to the new node.

---

## Step 4: Move Tail

```cpp
tail = temp;
```

Now the new node becomes the last node.

---

## Step 5: Connect Head's Previous Pointer

```cpp
head->prev = tail;
```

The head's `prev` points to the new tail.

---

# Insertion at Last — Main Logic

```cpp
temp->prev = tail;
temp->next = head;

tail->next = temp;

tail = temp;

head->prev = tail;
```

---

# Insertion at Last — Diagram

### Before

```text
                         head                              tail
                          |                                  |
                          v                                  v

                    +---------+      +---------+      +---------+
                    |   10    | <--> |   20    | <--> |   25    |
                    +---------+      +---------+      +---------+
                         ^                                  |
                         |                                  |
                         +----------------------------------+
```

### Insert `35`

```text
                         head                                      tail
                          |                                          |
                          v                                          v

                    +---------+      +---------+      +---------+      +---------+
                    |   10    | <--> |   20    | <--> |   25    | <--> |   35    |
                    +---------+      +---------+      +---------+      +---------+
                         ^                                                       |
                         |                                                       |
                         +-----------------------------------------------------+
```

---

# Insertion at Last — Full Logic

```cpp
void insertAtLast(int data)
{
    Node *temp = new Node(data);

    // Case 1: Empty list
    if (head == NULL)
    {
        head = temp;
        tail = temp;

        head->next = head;
        head->prev = head;

        return;
    }

    // Case 2: List contains nodes
    temp->prev = tail;

    temp->next = head;

    tail->next = temp;

    tail = temp;

    head->prev = tail;
}
```

---

# Clockwise Circular Connection

The notes show the clockwise circular movement.

```text
head
 |
 v

10 ---> 20 ---> 35
^                |
|                |
+----------------+
```

The main connection is:

```cpp
tail->next = head;
```

So:

```text
tail → head
```

---

# Anti-Clockwise Circular Connection

The reverse direction is maintained using `prev`.

```text
head
 |
 v

10 <--- 20 <--- 35
^                |
|                |
+----------------+
```

The main connection is:

```cpp
head->prev = tail;
```

So:

```text
head → tail
```

through the `prev` pointer.

---

# Important Pointer Changes

## Insert at First — Empty List

```cpp
head = temp;
tail = temp;

head->next = head;
head->prev = head;
```

---

## Insert at First — Existing List

```cpp
temp->next = head;
head = temp;

head->next->prev = temp;

tail->next = head;
head->prev = tail;
```

---

## Insert at Last — Empty List

```cpp
head = temp;
tail = temp;

head->next = head;
head->prev = head;
```

---

## Insert at Last — Existing List

```cpp
temp->prev = tail;
temp->next = head;

tail->next = temp;

tail = temp;

head->prev = tail;
```

---

# ⭐ Exam Memory

## INSERT AT FIRST

### Empty List

```cpp
head = temp;
tail = temp;

head->next = head;
head->prev = head;
```

### Existing List

```cpp
temp->next = head;
head = temp;

head->next->prev = temp;

tail->next = head;
head->prev = tail;
```

---

## INSERT AT LAST

### Empty List

```cpp
head = temp;
tail = temp;

head->next = head;
head->prev = head;
```

### Existing List

```cpp
temp->prev = tail;
temp->next = head;

tail->next = temp;

tail = temp;

head->prev = tail;
```

---

# Quick Revision

```text
                 CIRCULAR DOUBLY LINKED LIST
                            |
                 +----------+----------+
                 |                     |
                 v                     v
          INSERT AT FIRST        INSERT AT LAST
                 |                     |
                 v                     v
          +-------------+       +-------------+
          |             |       |             |
          v             v       v             v
        EMPTY        EXISTING  EMPTY       EXISTING
          |             |       |             |
          v             v       v             v
       head=temp    temp->next  head=temp   temp->prev=tail
       tail=temp    =head       tail=temp   temp->next=head
       next=head    head=temp   next=head    tail->next=temp
       prev=head    prev links  prev=head    tail=temp
                                               head->prev=tail
```

---

# Cases to Remember

## INSERT AT FIRST

```text
INSERT AT FIRST
      |
      +-- Case 1 → Empty List
      |            head = temp
      |            tail = temp
      |            head->next = head
      |            head->prev = head
      |
      +-- Case 2 → Existing Nodes
                   temp->next = head
                   head = temp
                   head->next->prev = temp
                   tail->next = head
                   head->prev = tail
```

---

## INSERT AT LAST

```text
INSERT AT LAST
      |
      +-- Case 1 → Empty List
      |            head = temp
      |            tail = temp
      |            head->next = head
      |            head->prev = head
      |
      +-- Case 2 → Existing Nodes
                   temp->prev = tail
                   temp->next = head
                   tail->next = temp
                   tail = temp
                   head->prev = tail
```

---

# Full Code

```cpp
#include <iostream>
using namespace std;

class Node
{
public:

    int data;
    Node *prev;
    Node *next;

    Node(int data)
    {
        this->data = data;
        this->prev = NULL;
        this->next = NULL;
    }
};


class CircularDoublyLinkedList
{
public:

    Node *head;
    Node *tail;

    CircularDoublyLinkedList()
    {
        this->head = NULL;
        this->tail = NULL;
    }


    // INSERT AT FIRST
    void insertAtFirst(int data)
    {
        Node *temp = new Node(data);

        // Case 1: Empty list
        if (head == NULL)
        {
            head = temp;
            tail = temp;

            head->next = head;
            head->prev = head;

            return;
        }

        // Case 2: Existing nodes
        temp->next = head;

        head = temp;

        head->next->prev = temp;

        tail->next = head;

        head->prev = tail;
    }


    // INSERT AT LAST
    void insertAtLast(int data)
    {
        Node *temp = new Node(data);

        // Case 1: Empty list
        if (head == NULL)
        {
            head = temp;
            tail = temp;

            head->next = head;
            head->prev = head;

            return;
        }

        // Case 2: Existing nodes
        temp->prev = tail;

        temp->next = head;

        tail->next = temp;

        tail = temp;

        head->prev = tail;
    }
};
```

---

# Most Important Lines

### Circular Connection

```cpp
tail->next = head;
head->prev = tail;
```

### Insert at First

```cpp
temp->next = head;
head = temp;
```

### Insert at Last

```cpp
temp->prev = tail;
temp->next = head;
tail->next = temp;
tail = temp;
```

---

# One-Line Revision

```text
Insert First
→ New node points to old HEAD
→ Move HEAD to new node
→ Fix PREV and circular links
```

```text
Insert Last
→ New node points back to HEAD
→ New node's PREV points to old TAIL
→ Move TAIL to new node
→ Fix HEAD's PREV
```

```text
Circular Rule
→ tail->next = head
→ head->prev = tail
```

---
