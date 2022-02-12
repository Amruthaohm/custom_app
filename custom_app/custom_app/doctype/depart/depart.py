# Copyright (c) 2022, momscode and contributors
# For license information, please see license.txt

import frappe
from frappe.utils.nestedset import NestedSet

class depart(NestedSet):
	if frappe.db.exists('depart','amrutha'):
		frappe.throw("this document exists in the database")
	else:
		frappe.throw("this document doesnot exist in the database")



