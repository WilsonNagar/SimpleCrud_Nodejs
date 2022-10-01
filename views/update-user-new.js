
<%- include('include/_header')%>

<main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
            <div class="filter">
                <a href="/"><i class="fas fa-angle-double-left"></i>All Users</a>
            </div>
        </div>
        <div class="form-tile text-center">
            <h2 class="text-dark">Update User</h2>
            <span class="text-light">Use the below form to update the user</span>
        </div>
        
        <!--form handling-->
        <form method="POST" id="update_user">
            <div class="new_user">
                <div class="form-group">
                    <label for="name" class="text-light">Name</label>
                    <input type="hidden" name="id" value="<%= user._id %>">
                    <input type="text" name="name" value="<%= user.name %>" placeholder="Mark Stoenis">
                </div>
                <div class="form-group">
                    <label for="Email" class="text-light">Email</label>
                    <input type="text" name="email" value="<%= user.email%>" placeholder="example@gmail.com">
                </div>
                <div class="form-group">
                    <label for="gender" class="text-light">Gender</label>
                    <div class="radio inline">
                        <input type="radio" id="radio-2" name="gender" value="Male" <%= user.gender == 'Male' ? 'checked' : '' %>>
                        <label for="radio-2" class="radio-label">Male</label>
                    </div>
                    <div class="radio inline">
                        <input type="radio" id="radio-3" name="gender" value="Female"  <%= user.gender == 'Female' ? 'checked' : '' %> >
                        <label for="radio-3" class="radio-label">Female</label>
                    </div>
                </div>
        

                <div class="form-group">
                    <label for="gender" class="text-light">Status</label>
                    <div class="radio inline">
                        <input type="radio" id="radio-4" name="status" value="Active" <%= user.status == 'Active' ? 'checked' : '' %> >
                        <label for="radio-4" class="radio-label">Active</label>
                    </div>
                    <div class="radio inline">
                        <input type="radio" id="radio-5" name="status" value="Inactive" <%= user.status == 'Inactive' ? 'checked' : '' %> >
                        <label for="radio-5" class="radio-label">Inactive</label>
                    </div>
                </div>
        

                <div class="form-group">
                    <button type="submit" class="btn text-dark update">Submit</button>
                </div>
            </div>
            
        </form>
    </div>
</main>
