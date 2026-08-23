# Linked List — Singly, Doubly & Circular

A **Linked List** is a data structure made up of nodes. Each node contains **data** and a **pointer/link** to another node.

## 1. Singly Linked List

A Singly Linked List moves only in the **forward direction**.

```text
10 → 20 → 30 → NULL
```

**Key Points:**

* One pointer: `next`
* Moves forward only
* Last node points to `NULL`
* Uses less memory

**Remember:** Singly = **One direction**

---

## 2. Doubly Linked List

A Doubly Linked List can move in **both directions**.

```text
NULL ← 10 ↔ 20 ↔ 30 → NULL
```

**Key Points:**

* Two pointers: `prev` and `next`
* Moves forward and backward
* First node's `prev` is `NULL`
* Last node's `next` is `NULL`
* Uses more memory

**Remember:** Doubly = **Two directions**

---

## 3. Circular Linked List

A Circular Linked List connects the **last node back to the first node**.

```text
10 → 20 → 30
↑         ↓
└─────────┘
```

**Key Points:**

* Last node points to the first node
* Does not end with `NULL`
* Forms a circle
* Can be traversed repeatedly

**Remember:** Circular = **Last → First**

---

## Quick Difference

| Type     | Direction             | Last Node        |
| -------- | --------------------- | ---------------- |
| Singly   | Forward ➡️            | Points to `NULL` |
| Doubly   | Forward + Backward ↔️ | Points to `NULL` |
| Circular | Forward 🔄            | Points to First  |

### Easy Memory Trick

```text
Singly  →  10 → 20 → 30 → NULL

Doubly  →  NULL ← 10 ↔ 20 ↔ 30 → NULL

Circular →  10 → 20 → 30 → 10 → ...
```

> **Singly = One pointer**
> **Doubly = Two pointers**
> **Circular = Last connects to First**
