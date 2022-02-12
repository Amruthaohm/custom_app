// Copyright (c) 2022, momscode and contributors
// For license information, please see license.txt

frappe.ui.form.on('school details', {
	/*refresh:function(frm){
		frm.add_custom_button('say hai',()=>{
			console.log('hai')
		})
	},
	refresh:function(frm){
		frm.add_custom_button('say hi',()=>{
			console.log('hai')},"action");
		frm.add_custom_button('ping',()=>{
			console.log('hi')
		},"action");
		frm.add_custom_button('pong',()=>{
			console.log('hai')
		},"action");
	});
	refresh:function(frm){
		frm.add_custom_button('say hai',()=>{
			frappe.msgprint("document updated successfully");
		});*/
		refresh:function(frm){
			frm.add_custom_button('first name',()=>{
				frappe.prompt('first name',({value})=>{
					if(value){
						frm.set_value('first_name',value);
						frm.refresh_field('first_name')
						frappe.msgprint(('first_name field updated with '+ ' ' +value));
					}
				})
			});
			frm.add_custom_button('last name',()=>{
				frappe.prompt('last name',({value})=>{
					if(value){
						frm.set_value('last_name',value);
						frm.refresh_field('last_name')
						frappe.msgprint('last name field upadated with'+ ' ' +value);
				
						
			
				
						
					}

				})
			})
		}
		
	
		
		
});
