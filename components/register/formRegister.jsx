import React from 'react';

const formRegister = () => {
    return (
        <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div style="background-color: #f2f2f2; padding: 20px;">
                    <img src="path/to/logo.png" alt="Logo" style="max-width: 200px;">
                    <h3>Slogan Anda</h3>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="mt-5">
                    <h3>Daftar</h3>
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Nama</label>
                            <input type="text" class="form-control" id="name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Nomor Telepon</label>
                            <input type="tel" class="form-control" id="phone" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Buat Password</label>
                            <input type="password" class="form-control" id="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Daftar</button>
                        <p class="mt-2">Sudah punya akun? <a href="#">Masuk disini</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default formRegister;
