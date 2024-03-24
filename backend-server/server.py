# backend/app.py
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import os
import utils


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})



@app.route('/api/data')
def get_data():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

ALLOWED_EXT = set(['jpg' , 'jpeg' , 'png'])
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXT

@app.route('/api/process', methods = ['GET', 'POST'])
def process():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    

    if not allowed_file(file.filename):
        return jsonify({'error': 'Unable to read the file. Please check file extension'}), 400 
    
    filename = file.filename
    file_path = os.path.join('static/images', filename)
    file.save(file_path)
    utils.detect_and_draw_box(file_path, filename)
    
    return jsonify({'processed_image_url': f'/api/get_processed_image/{filename}'})

    
@app.route('/api/get_processed_image/<filename>')
def get_processed_image(filename):
    processed_images_dir = 'static/processed_images'
    return send_from_directory(processed_images_dir, filename)   


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True, port=8080)
